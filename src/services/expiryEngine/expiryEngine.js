export function isExpired(uploadedAt, hours=3) {
    const uploadedTime = uploadedAt.toDate ? uploadedAt.toDate() : new Date(uploadedAt);
    const now = new Date();
    const hoursPassed = (now - uploadedTime)/(1000*60*60);
    return hoursPassed >= hours;
}
