import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  increment,
  query,
  orderBy
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8LpPcLQP4q_ESKX1uH8iGXSXPAf82Ub8",
  authDomain: "midas-bd-ff00a.firebaseapp.com",
  projectId: "midas-bd-ff00a",
  storageBucket: "midas-bd-ff00a.firebasestorage.app",
  messagingSenderId: "182776076466",
  appId: "1:182776076466:web:c19bbad309ee55786691ab"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export async function registerUser(name, email, phone, password) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "users", cred.user.uid), {
    name,
    email,
    phone,
    createdAt: new Date()
  });

  return cred.user;
}

export async function loginUser(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export async function logoutUser() {
  await signOut(auth);
}

export function watchAuth(callback) {
  return onAuthStateChanged(auth, callback);
}



export async function getProfile(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
}



export async function saveReservation(orderData) {
  const user = auth.currentUser;
  if (!user) throw new Error("Не авторизован");

  await setDoc(
    doc(db, "users", user.uid, "reservations", "current"),
    {
      ...orderData,
      userId: user.uid,
      updatedAt: new Date()
    }
  );

  await setDoc(
    doc(db, "reservations", user.uid),
    {
      ...orderData,
      userId: user.uid,
      updatedAt: new Date()
    }
  );
}

export async function loadReservations() {
  const user = auth.currentUser;
  if (!user) return [];

  const snap = await getDoc(
    doc(db, "users", user.uid, "reservations", "current")
  );

  return snap.exists() ? [snap.data()] : [];
}

export async function deleteCurrentReservation() {
  const user = auth.currentUser;
  if (!user) return;

  await deleteDoc(doc(db, "users", user.uid, "reservations", "current"));
  await deleteDoc(doc(db, "reservations", user.uid));
}

export async function loadTables() {
  const snap = await getDocs(collection(db, "tables"));

  return snap.docs.map(doc => doc.data());
}


export async function loadDishes(sortType = "default") {
  let q;

  if (sortType === "priceAsc") {
    q = query(collection(db, "dishes"), orderBy("price", "asc"));
  } else if (sortType === "priceDesc") {
    q = query(collection(db, "dishes"), orderBy("price", "desc"));
  } else if (sortType === "popularity") {
    q = query(collection(db, "dishes"), orderBy("popularity", "desc"));
  } else {
    q = query(collection(db, "dishes"));
  }

  const snap = await getDocs(q);

  return snap.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}



export async function addToCart(dish) {
  const user = auth.currentUser;
  if (!user) throw new Error("Не авторизован");

  const ref = doc(db, "users", user.uid, "cart", dish.id);
  const snap = await getDoc(ref);

  if (snap.exists()) {
    await updateDoc(ref, {
      quantity: increment(1)
    });
  } else {
    await setDoc(ref, {
      dishId: dish.id,
      name: dish.name,
      price: dish.price,
      image: dish.image ?? "",
      weight: dish.weight ?? "",
      quantity: 1,
      createdAt: new Date()
    });
  }
}

export async function loadCart() {
  const user = auth.currentUser;
  if (!user) return [];

  const snap = await getDocs(
    collection(db, "users", user.uid, "cart")
  );

  return snap.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

export async function removeFromCart(id) {
  const user = auth.currentUser;
  await deleteDoc(doc(db, "users", user.uid, "cart", id));
}




export async function loadOrders() {
  const user = auth.currentUser;
  if (!user) return [];

  const snap = await getDocs(collection(db, "orders"));

  return snap.docs
    .map(doc => doc.data())
    .filter(o => o.userId === user.uid);
}

export async function createOrder() {
  const user = auth.currentUser;
  if (!user) throw new Error("Не авторизован");

  const cartRef = collection(db, "users", user.uid, "cart");
  const snap = await getDocs(cartRef);

  const items = snap.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  await setDoc(doc(db, "orders", user.uid), {
    userId: user.uid,
    items,
    updatedAt: new Date()
  });

  for (const cartDoc of snap.docs) {
    await deleteDoc(doc(db, "users", user.uid, "cart", cartDoc.id));
  }
}

export async function deleteOrder(orderId) {
  const orderRef = doc(db, "orders", orderId);
  await deleteDoc(orderRef);
}


export async function loadAllUsers() {
  const snap = await getDocs(collection(db, "users"));
  return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function loadAllReservations() {
  const snap = await getDocs(collection(db, "reservations"));
  return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function loadAllOrders() {
  const snap = await getDocs(collection(db, "orders"));
  return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function deleteUser(userId) {
  await deleteDoc(doc(db, "users", userId));
  
  await deleteDoc(doc(db, "reservations", userId));
  await deleteDoc(doc(db, "users", userId, "reservations", "current"));
  
  await deleteDoc(doc(db, "orders", userId));
}


export async function updateReservationData(id, table, date, time, people) {
  await updateDoc(doc(db, "reservations", id), {
    table: table,
    date: date,
    time: time,
    people: people,
    updatedAt: new Date()
  });
  
  await updateDoc(doc(db, "users", id, "reservations", "current"), {
    table: table,
    date: date,
    time: time,
    people: people,
    updatedAt: new Date()
  });
}

export async function deleteReservation(reservationId) {
  await deleteDoc(doc(db, "reservations", reservationId));
  await deleteDoc(doc(db, "users", reservationId, "reservations", "current"));
}


export async function updateOrderItemQuantity(orderId, itemIndex, newQuantity) {
  const orderRef = doc(db, "orders", orderId);
  const snap = await getDoc(orderRef);
  
  if (snap.exists()) {
    const orderData = snap.data();
    const items = orderData.items;
    
    items[itemIndex].quantity = newQuantity;
    
    await updateDoc(orderRef, { items });
  }
}

export async function deleteOrderItem(orderId, itemIndex) {
  const orderRef = doc(db, "orders", orderId);
  const snap = await getDoc(orderRef);
  
  if (snap.exists()) {
    const orderData = snap.data();
    const items = orderData.items;
    
    items.splice(itemIndex, 1);
    
    await updateDoc(orderRef, { items });
  }
}
