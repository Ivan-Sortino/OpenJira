interface SeedData{
    entries: SeedEntry[];
}

interface SeedEntry{
    description: string;
    status: string;
    createAt: number;
}






export const seedData: SeedData ={
    entries:[
        {
            description: 'Pendiente: lorem inous',
            status: 'pending',
            createAt: Date.now()
        },
        {
            description: 'En Progreso: asdm,hasdhadsgasd',
            status: 'in-progress',
            createAt: Date.now()
        },
        {
            description: 'Terminadas: asdamdsajhdsgjkahdg',
            status: 'finished',
            createAt: Date.now()
        },
    ]
}