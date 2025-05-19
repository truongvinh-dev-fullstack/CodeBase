import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { BottomTabButton } from './components/BottomTabButton';
import { BottomTabLabel } from './components/BottomTabLabel';
import { BottomTabParamList } from './BottomTabParamList';
import SCREEN2 from '../screens/screen2';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="SCREEN2"
                component={SCREEN2}
                options={{
					// eslint-disable-next-line react/no-unstable-nested-components
                    tabBarLabel: ({ focused }: { focused: boolean }) => (
                        <BottomTabLabel focused={focused} content={'SCREEN2'} />
                      ),
					// tabBarIcon: ({ focused }: { focused: boolean }) => (
					// 	<BottomTabButton source={icons.ic_menu_dashboard} focused={focused} />
					// ),
				}}
            />
        </Tab.Navigator>
    );
}


