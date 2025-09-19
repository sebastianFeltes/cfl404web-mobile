import { Tabs } from "expo-router";

function TabLayout (){
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ headerShown: false }} />
        </Tabs>
    )
}

export default TabLayout;