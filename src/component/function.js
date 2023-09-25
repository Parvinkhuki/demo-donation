const getStoredDonatedApplication = () =>{
    const storedDonatedApplication = localStorage.getItem('job-applications');
    if(storedDonatedApplication){
        return JSON.parse(storedDonatedApplication);
    }
    return [];
}


const saveDonatedApplication = id =>{
    const storedDonatedApplications = getStoredDonatedApplication();
    const exists = storedDonatedApplications.find(jobId => jobId === id);
    if(!exists){
        storedDonatedApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedDonatedApplications))
    }
}

export { getStoredDonatedApplication, saveDonatedApplication}