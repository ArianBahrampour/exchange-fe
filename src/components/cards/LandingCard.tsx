import { Card, CardContent, CardHeader, Divider, Typography, styled } from "@mui/material";
import React from "react";

const StyledCard = styled(Card)(({ theme }) => ({
    boxShadow:
        "0px 3px 6px 0px rgba(24,26,32,0.08), 0px 7px 14px 0px rgba(71,77,87,0.08), 0px 0px 1px 0px rgba(24,26,32,0.1);",
}));

type LandingCardProps = {
    children?: React.ReactNode;
    title?: string;
};

const LandingCard: React.FC<LandingCardProps> = ({ title, children }) => {
    return (
        <StyledCard>
            <CardContent>
                <Typography>{title}</Typography>
                <Divider flexItem />
                {children}
            </CardContent>
        </StyledCard>
    );
};

export default LandingCard;
