import { useState } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

export default function RightBar() {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <div className="overflow-hidden">
            <div className={`min-h-screen font-figtree absolute right-0 border-l-2 transition-all duration-300 border-gray-200 ${isOpen ? 'w-[24em]' : 'w-[0em] right-5'}`}>
                <div className="flex flex-col h-full overflow-hidden">

                    {/* visiblity arrow */}
                    <div className="flex absolute cursor-pointer top-1/2 left-[-1.4em] items-center justify-center bg-white rounded-full border-[1px] border-gray-200 flex-row justify-end items-center p-2">
                        <motion.button
                            className="text-2xl cursor-pointer font-semibold"
                            onClick={() => setIsOpen(!isOpen)}
                            animate={{
                                rotate: isOpen ? 0 : 180,
                            }}
                            transition={{
                                duration: 0.4,
                                ease: 'easeInOut',
                            }}
                        >
                            <ArrowRightIcon className="w-6 h-6 text-gray-800" />
                        </motion.button>
                    </div>

                    {/* Header */}
                    <motion.div
                        className={`flex flex-row justify-between items-center p-4`}
                        animate={{
                            opacity: isOpen ? 1 : 0,
                            display: isOpen ? 'flex' : 'none',
                        }}
                        transition={{
                            duration: 0.4,
                            ease: 'easeInOut',
                        }}
                    >
                        <motion.h1
                            className="text-3xl font-semibold ml-4"
                            animate={{
                                opacity: isOpen ? 1 : 0,
                            }}
                            transition={{
                                duration: 0.4,
                                ease: 'easeInOut',
                            }}
                        >Configurator</motion.h1>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}
