import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection,getDocs,query,where } from '@firebase/firestore';
import { Users } from '../register/interface/users';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  private userSubject = new ReplaySubject<User | null>(1); // Guarda el último valor emitido
  user$ = this.userSubject.asObservable();


  constructor(private auth: Auth, private firestore: Firestore) { 

    // función para escuchar cambios en el estado de autenticación

    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.userSubject.next(user); 
      } else {
        this.userSubject.next(null); 
      }
    });
  }

  // Añadir usuario en Firestore database
  
  addUser(user: Users){
    const usersRef = collection(this.firestore,'users');
    return addDoc(usersRef,user);
  }

  // Comprobar si el usuario registrado es admin

  async getAdminStatus(): Promise<boolean> {
    const currentUser = this.auth.currentUser;
  
    if (currentUser) {
      const userDocRef = collection(this.firestore, 'users');
      const querySnapshot = await getDocs(query(userDocRef, where('uid', '==', currentUser.uid)));
      console.log('Documentos encontrados:', querySnapshot.docs);
  
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();
        return userData?.['admin'] || false;
      }
    }
  
    return false;
  }
  
  // para obtener el usuario desde dentro de userService
  
  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }
  

  register({email, password} : any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({email, password}: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  
  loginWithGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }
}
