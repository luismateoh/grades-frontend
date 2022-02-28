import { useContext } from 'react';
import { SettingsContext } from '../pages/contexts/SettingsContext';

// ----------------------------------------------------------------------

const useSettings = () => useContext(SettingsContext);

export default useSettings;
