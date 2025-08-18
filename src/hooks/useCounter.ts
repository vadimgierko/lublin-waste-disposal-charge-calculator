// hooks/useCounter.ts
import { useEffect, useState } from "react";
import { firestore } from "@/firebaseConfig";
import {
  doc,
  onSnapshot,
  updateDoc,
  increment,
  setDoc,
} from "firebase/firestore";

export function useCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const counterRef = doc(firestore, "stats", "counter");

    // Listen to changes in real-time
    const unsubscribe = onSnapshot(counterRef, (docSnap) => {
      if (docSnap.exists()) {
        setCount(docSnap.data().value);
      } else {
        console.error("There is no counter value in Firestore...")
        setCount(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const incrementCounter = async () => {
    const counterRef = doc(firestore, "stats", "counter");

    await updateDoc(counterRef, {
      value: increment(1),
    });
  };

  return { count, incrementCounter };
}
