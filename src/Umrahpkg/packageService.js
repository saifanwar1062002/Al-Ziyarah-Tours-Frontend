export const fetchPackages = async () => {
    try {
        const response = await fetch('https://crmweb.hajumrahservice.com/api/enquiries/apikey/packages/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "X-API-KEY": "9e5f0d1a-ee3c-4556-bb6e-4bb38e218928",
            },
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching packages:', error);
        throw error;
    }
};

// Group packages by type
export const groupPackagesByType = (packages) => {
    return packages.reduce((acc, pkg) => {
        const type = pkg.package_type;
        if (!acc[type]) {
            acc[type] = [];
        }
        acc[type].push(pkg);
        return acc;
    }, {});
};

// Get packages by specific type
export const getPackagesByType = (packages, packageType) => {
    return packages.filter(pkg => pkg.package_type === packageType);
};
