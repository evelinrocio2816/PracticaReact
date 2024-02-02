const medicos=[
    {id: 1, name:"Esteban Palazzolo", especialidad:"neurocirugia" ,idCat: "neurocirugia", image:"https://i.pinimg.com/originals/a0/19/d5/a019d57579f84c19690594ce63a35e21.jpg"},
    {id: 2, name:"Miguel Amor", especialidad:"cardiologia" ,idCat: "cardiologia",image:"https://st.depositphotos.com/1258191/3252/i/450/depositphotos_32524605-stock-photo-portrait-of-a-handsome-doctor.jpg"},
    {id: 3, name:"Xavier Figueroa", especialidad:"cirugia plastica" ,idCat: "cirugiaPlastica", image:"https://www.okchicas.com/wp-content/uploads/2017/02/julian-morris-habitue-au-monde-secret-de.jpg"},
    {id: 4, name:"Dimitra Farace", especialidad:"otorrinolaringologia" ,idCat: "otorrinolaringologia", image:"https://www.rastreator.mx/wp-content/uploads/gastos-medicos-para-jovenes-trabajadores.png"},
    {id: 5, name:"Dimitra Farace", especialidad:"otorrinolaringologia" ,idCat: "otorrinolaringologia", image:"https://www.rastreator.mx/wp-content/uploads/gastos-medicos-para-jovenes-trabajadores.png"},
    {id: 6, name:"Dimitra Farace", especialidad:"otorrinolaringologia" ,idCat: "otorrinolaringologia", image:"https://www.rastreator.mx/wp-content/uploads/gastos-medicos-para-jovenes-trabajadores.png"},
    {id: 7, name:"Dimitra Farace", especialidad:"otorrinolaringologia" ,idCat: "otorrinolaringologia", image:"https://www.rastreator.mx/wp-content/uploads/gastos-medicos-para-jovenes-trabajadores.png"}
]

export const getDoctors =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(medicos)
        },100)
    })
}

//creo una funcion similar para que nos retorne un solo items

export const getOneDoctor = (id)=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            const medico = medicos.find(medico => medico.id === id)
            resolve(medico)
        },100)
    })
}

//Funcion que retorna determinada categoria

export const getDoctorsByCategory= (idCategory)=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            const doctorsCategory= medicos.filter(med => med.idCat === idCategory)
            resolve(doctorsCategory)

        },100)
    })
}