export const ProviderIdToName = new Map(Object.entries({
    AWS: 'AWS',
    IBM: 'IBM',
    GCP: 'Google',
    AZURE: 'Azure',
    CF: 'Cloudflare'
}));

export const ProviderIdToSubName = new Map(Object.entries({
    AWS: 'Lambda',
    IBM: 'Cloud Functions',
    GCP: 'Cloud Functions',
    AZURE: 'Functions',
    CF: 'Workers'
}));

export const ProviderIdToColor = new Map(Object.entries({
    AWS: '#f6993f',
    IBM: '#38c172',
    GCP: '#4DC0B5',
    AZURE: '#3490dc',
    CF: '#9561e2'
}));


export const ProviderIdToColorName = new Map(Object.entries({
    AWS: 'orange',
    IBM: 'green',
    GCP: 'teal',
    AZURE: 'blue',
    CF: 'purple'
}));
