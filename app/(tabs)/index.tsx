import {ScrollView, Text, TouchableOpacity, View} from "react-native";

import {useAuth} from "@clerk/clerk-expo";
import {styles} from "@/styles/feed.styles";
import {Ionicons} from "@expo/vector-icons";
import {COLORS} from "@/constants/theme";
import {STORIES} from "@/constants/mock-data";
import Story from "@/components/story";

export default function Index() {

  const { signOut } = useAuth()

  return (
    <View
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          spotlight
        </Text>
        <TouchableOpacity
          onPress={() => signOut()}
        >
          <Ionicons name='log-out-outline' size={24} color={COLORS.white}/>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
      >
        <ScrollView
            showsVerticalScrollIndicator={false}
            horizontal
            style={styles.storiesContainer}
        >
          {STORIES.map(story => (
              <Story story={story} key={story.id}/>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}


