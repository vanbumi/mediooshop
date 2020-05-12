## Project MediooShop


#### Bab 14 Firebase & Firestore

**Create Query**

```javascript
firestore.collection('user').doc('xxxid').collection('cartItems').doc('xxxid')

// or

firestore.doc('/users/id/cartItems/id');

// or

firestore.collection('/users/id/cartItems')


```