import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


export const Main = styled(motion.div)`
    flex: 1;
`


export const slideAnimation = {
    show: {
        x: 0,
        opacity: 1,
    },
    hide: {
        x: -50,
        opacity: 0,
    },
    initial: {
        x: "100%",
        opacity: 0,
    },
}
