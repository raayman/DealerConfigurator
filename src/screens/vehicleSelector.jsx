import RightBar from '../components/rightBar'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'


const vehicles = [
    {
        id: 1,
        name: 'Audi RS5',
        images: {
            exterior: [
                {
                    id: 1,
                    image: '/exterior/rs51.avif'
                },
                {
                    id: 2,
                    image: '/exterior/rs52.avif'
                }
            ],
            interior: [
                {
                    id: 1,
                    image: '/interior/rs511.avif'
                },
                {
                    id: 2,
                    image: '/interior/rs512.avif'
                },
                {
                    id: 3,
                    image: '/interior/rs513.avif'
                }
            ]
        }
    }
]

export default function VehicleSelector() {
    const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 800)
    }, [])

    return (
        <div className="flex flex-row h-screen w-full relative">
            <div className="flex-1 relative">
                <motion.img 
                    src={selectedVehicle?.images?.exterior[0]?.image} 
                    className="w-full h-[100dvh] object-cover" 
                    alt="image" 
                    animate={{
                        opacity: isLoading ? 0 : 1,
                        transition: {
                            duration: 1,
                            ease: 'easeInOut',
                        }
                    }}
                />
            </div>
            <RightBar />
        </div>
    )
}
