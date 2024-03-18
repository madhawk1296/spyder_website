'use client'

import { ReactNode, useContext } from "react";
import DashboardContainer from "../DashboardContainer";
import SectionNav from "../SectionNav";
import { MapperType } from "@/types/tables";
import MapperOptions from "./MapperOptions";
import CreateMapperProvider, { CreateMapperContext } from "@/components/providers/CreateMapperProvider";

export default function Mappers({ children, mappers, limitReached }: { children: ReactNode, mappers: MapperType[], limitReached: boolean }) {
    const { toggleMenu } = useContext(CreateMapperContext)

    return (
            <DashboardContainer>
                <SectionNav title="Mappers" createTitle="Create Mapper" createAction={toggleMenu} options={<MapperOptions mappers={mappers} />} limitReached={limitReached}>
                    {children}
                </SectionNav>
            </DashboardContainer>
    )
}