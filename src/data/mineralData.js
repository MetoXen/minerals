const mineralsList = [
    {
        name: "Aquamarine",
        type: "Beryl",
        Image: "Aquamarine.jpg",
        notes: `It belongs to the order of beryls, in most found samples it is a blue or blue-green mineral, in the Mohs hardness table beryls are around 7.5-8. Aquamarine has the ability to disperse light, so when the optical axis changes, it changes from blue to an almost colorless shade. it consists mostly of oxygen and silicon, with a smaller part of aluminum and beryllium.`,
        link: "https://en.wikipedia.org/wiki/Aquamarine_(gem)"
    },
    {
        name: "Emerald",
        type: "Beryl",
        Image: "Emerald6.jpg",
        notes: "jfidhgujhsujhfujdsffsdhjns"
    },
    {
        name: "Amethyst",
        type:  "Silicate",
        Image: "ametyst.jpg",
        notes: "fjoijgikjdsgihhsifhfihujhuj"
    },
    {
        name: "Citrine",
        type: "Silicate",
        Image: "citrin.jpg",
        notes: "vikdvdjvjusjvskvhjvjsdvjksdkivsjsjdjsd"
    }
]

export const types = () => {
    const list = []
    mineralsList.forEach((mineral) => {
       if (!list.includes(mineral.type )) {
        list.push(mineral.type )
       }
    })


        
    return list
}

export const minerals = () => {
    const list = []
    mineralsList.forEach((mineral) => {
        if (!list.includes(mineral.type)) {
            list.push(mineral.type)
        }



    })
    const sortedData = {}
    list.forEach((type) => {

        const typeList = []
        mineralsList.forEach((mineral) => {
            if (type === mineral.type) {
                typeList.push(mineral)
            }

        })
        sortedData[type] = typeList


    })
    return sortedData
 
}


