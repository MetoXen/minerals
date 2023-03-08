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
    },
    {
        name: "Bixbite",
        type: "Beryl",
        Image: "bixbite.jpg",
        notes: "Bixbite is known as red beryl, the shade can be pink, it is one of the rarest gemstones therefore it is highly valued."
    },
    {
        name: "Morganite",
        type: "Beryl",
        Image: "morganite.jpg",
        notes: "Morganite is a beige sometimes even pink mineral again from the beryl group, the largest deposit is Madagascar, where the largest specimen was found, which is now in the British Museum, weighing 598 ct."
    },
    {
        name: "Heliodor",
        type: "Beryl",
        Image: "heliodor.jpg",
        notes: "Golden beryl can range in colors from pale yellow to a brilliant gold. Heliodor as a member of the beryl group of minerals is mostly found in Brazil, Madagascar, Colombia and Russia."
    },
    {

        name: "Maxixe",
        type: "Beryl",
        Image: "maxixe.jpg",
        notes: "Maxixe is a blue beryl often confused with aquamarine, and like most beryls, it can be used in jewelry. Maxixe is dark blue in color, the shade of blue distinguishes it from aquamarine."
    },
    {
        
        name: "Pezzottaite",
        type: "Beryl",
        Image: "pezzottaite.jpg",
        notes: " Pezzottaite is known under the name raspberyl, which is short for raspberry beryl. Pezzottaite was undiscovered until 2003 when it was discovered by the IMA International Mineralogical Association."
    },
    {
        
        name: "Goshenite",
        type: "Beryl",
        Image: "Goshenite3.jpg",
        notes: "Goshenite is a colorless gem variety of beryl. It is called the mother of all gemstones because it can be transformed into other like emerald, morganite, or bixbite. Goshenite is also referred to as the purest form of beryl since there are generally no other elements present in the stone. The gem is used as imitation for diamond or emerald by adding colored foil on it."
    },
    {
        
        name: "Rose quartz",
        type: "Silicate",
        Image: "rosequartz2.jpg",
        notes: "Goshenite is a colorless gem variety of beryl. It is ca."
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


