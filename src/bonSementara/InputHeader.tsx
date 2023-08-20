import { Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const InputHeader:React.FC = () => {
    const [expand, setExpand] = useState(false);

    const toggleAccordion = () => {
        setExpand((prev) => !prev);
    };

    return(
        <Accordion
            sx={{ display: "flex", flexWrap: "wrap" }}
            expanded={expand}
            onChange={toggleAccordion}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant="h5" style={{ fontWeight: 600 }}> Search Filter </Typography>
            </AccordionSummary>

            <AccordionDetails>
            <div className="wrapper">

            </div>

            </AccordionDetails>

        </Accordion>
    )
};

export default InputHeader;