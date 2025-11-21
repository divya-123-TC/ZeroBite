import { db } from '../firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';
import { getDocs, collection } from 'firebase/firestore';

export async function notifySWM(donationId) {
    const muniSnap = await getDocs(collection(db,'municipalities'));
    muniSnap.forEach(async (docItem) => {
        const token = docItem.data().fcmToken;
        if(token){
            console.log('Notify SWM/Compost for donation:', donationId);
        }
    });
    await updateDoc(doc(db,'donations',donationId), { status: 'send_to_compost_swm' });
}
