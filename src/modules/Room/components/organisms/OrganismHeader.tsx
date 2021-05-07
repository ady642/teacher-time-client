import styled from 'styled-components';
import React, {FC, useState} from 'react';
import { AtomsLogo } from '../atoms';
import { MoleculesLeftSide } from '../molecules';

const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  background: #16202c;
  box-shadow: 2px 2px 6px #000000;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
  z-index: 10;
  .toolbar {
    height: 64px;
    padding-left: 24px;
    padding-right: 24px;
    display: flex;
    position: relative;
    align-items: center;
  }
`;

interface OrganismHeaderProps {
	title: string;
	navItems: any[];
	onNavItemSelect: Function
}

export const OrganismsHeader: FC<OrganismHeaderProps> = ({ title, navItems, onNavItemSelect }) => {
	const [isLeftSideShow] = useState(false);
	return (
		<>
			<HeaderContainer>
				<div className="toolbar">
					<AtomsLogo>{title}</AtomsLogo>

					<div style={{ flexGrow: 1 }} />
					<picture />
				</div>
			</HeaderContainer>
			{navItems && (
				<MoleculesLeftSide
					isLeftSideShow={isLeftSideShow}
					onItemSelect={(user: any) => onNavItemSelect(user)}
					items={navItems}
				/>
			)}
		</>
	);
};
