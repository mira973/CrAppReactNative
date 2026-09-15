import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../Components/Styles/colors';
import { spacing } from '../Components/Styles/spacing';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {

    const router = useRouter();
    return (
        <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeHeaderText}>Crownlytics</Text>

            <View style={styles.content}>
                <Text style={styles.mainTextWelcome}>Master every battle.</Text>
                <Text style={styles.afterMainWelcomeText}>
                    Track performance, decode decks, and climb smarter with your personal arena companion.
                </Text>
            </View>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.primaryButton} activeOpacity={0.8} onPress={() => router.push('/LogInPage')}>
                    <Text style={styles.primaryButtonText}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.8} onPress={() => router.push('/signup')}>
                    <Text style={styles.secondaryButtonText}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    welcomeContainer: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-between',
        backgroundColor: colors.background,
        paddingHorizontal: spacing.screen,
        paddingVertical: spacing.section,
    },
    welcomeHeaderText: {
        color: colors.text,
        fontSize: 24,
        fontWeight: '700',
        letterSpacing: 0.2,
        textAlign: 'center',
    },
    content: {
        alignItems: 'center',
        alignSelf: 'center',
        gap: 12,
        maxWidth: 520,
        width: '100%',
    },
    mainTextWelcome: {
        color: colors.text,
        fontSize: 30,
        fontWeight: '700',
        lineHeight: 38,
        textAlign: 'center',
    },
    afterMainWelcomeText: {
        color: colors.mutedText,
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
    },
    actions: {
        alignSelf: 'center',
        gap: spacing.button,
        maxWidth: 520,
        width: '100%',
    },
    primaryButton: {
        alignItems: 'center',
        backgroundColor: colors.accent,
        borderRadius: 8,
        minHeight: 48,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    secondaryButton: {
        alignItems: 'center',
        borderColor: colors.border,
        borderRadius: 8,
        borderWidth: 1,
        minHeight: 48,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    primaryButtonText: {
        color: colors.buttonText,
        fontSize: 16,
        fontWeight: '600',
    },
    secondaryButtonText: {
        color: colors.text,
        fontSize: 16,
        fontWeight: '600',
    },
});