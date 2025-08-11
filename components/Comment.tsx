import {Text, View} from "react-native";
import { styles } from "@/styles/feed.styles"
import {Image} from "expo-image";
import {formatDistanceToNow} from "date-fns/formatDistanceToNow";

interface Comment {
    content: string;
    _creationTime: number;
    user: {
        fullname: string;
        image: string
    }
}

export default function Comment({ comment }: { comment: Comment}) {
        return (
            <View style={styles.commentContainer}>
                <Image source={{ uri: comment.user.image }} style={styles.commentAvatar}/>
                <View style={styles.commentContent}>
                    <Text style={styles.commentUsername}>{comment.user.fullname}</Text>
                    <Text style={styles.commentText}>{comment.content}</Text>
                    <Text>
                        {comment._creationTime}
                        {formatDistanceToNow(comment._creationTime, { addSuffix: true })}
                    </Text>
                </View>
            </View>
        )
}