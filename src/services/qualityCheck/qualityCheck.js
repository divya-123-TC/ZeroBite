import { db } from '../firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

export async function checkFoodQuality(donation) {
  const uploadedTime = donation.uploadedAt.toDate ? donation.uploadedAt.toDate() : new Date(donation.uploadedAt);
  const now = new Date();
  const hoursPassed = (now - uploadedTime) / (1000*60*60);

  if (hoursPassed >= 3) return 'expired';

  const random = Math.random();
  if (random < 0.7) return 'good';
  if (random < 0.9) return 'slight_spoilage';
  return 'bad';
}

export async function routeFood(donation) {
  const status = await checkFoodQuality(donation);
  let updateData = {};

  if (status === 'good') updateData = { status: 'ready_for_human_shelter' };
  else if (status === 'slight_spoilage') updateData = { status: 'route_to_animal_shelter' };
  else updateData = { status: 'send_to_compost_swm' };

  await updateDoc(doc(db,'donations', donation.id), updateData);
  return updateData.status;
}
