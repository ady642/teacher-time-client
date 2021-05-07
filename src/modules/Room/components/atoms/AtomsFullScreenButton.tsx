import React from 'react';
import { Button } from './AtomsButton';

export const AtomsShareScreen = ({ isSharing =false, onToggle =() => {}}) => {
	return <Button onClick={() => onToggle()}>{isSharing ? 'Cancel' : 'Share Screen'}</Button>;
};
