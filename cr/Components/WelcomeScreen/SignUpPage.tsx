import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors } from '../Styles/colors';
import { spacing } from '../Styles/spacing';

export function SignUpPage() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>Create your account</Text>
                    <Text style={styles.subtitle}>
                        Build your profile and keep every battle insight in one place.
                    </Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.field}>
                        <Text style={styles.label}>Username</Text>
                        <TextInput
                            autoCapitalize="none"
                            placeholder="Enter your nickname"
                            placeholderTextColor={colors.placeholder}
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            autoCapitalize="none"
                            keyboardType="email-address"
                            placeholder="Enter your email"
                            placeholderTextColor={colors.placeholder}
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            placeholder="Enter your password"
                            placeholderTextColor={colors.placeholder}
                            secureTextEntry
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Confirm password</Text>
                        <TextInput
                            placeholder="Repeat your password"
                            placeholderTextColor={colors.placeholder}
                            secureTextEntry
                            style={styles.input}
                        />
                    </View>

                    <TouchableOpacity activeOpacity={0.8} style={styles.createAccountButton}>
                        <Text style={styles.createAccountButtonText}>Create account</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.termsText}>
                    By creating an account, you agree to our Terms and Privacy Policy.
                </Text>

                <TouchableOpacity activeOpacity={0.7} style={styles.loginLinkButton}>
                    <Text style={styles.loginLinkText}>Already have an account? Log in</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: spacing.screen,
        paddingVertical: spacing.section,
    },
    content: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        maxWidth: spacing.formMaxWidth,
        width: '100%',
    },
    header: {
        gap: spacing.contentGap,
        marginBottom: spacing.formGap,
    },
    title: {
        color: colors.text,
        fontSize: 30,
        fontWeight: '700',
        lineHeight: 38,
        textAlign: 'center',
    },
    subtitle: {
        color: colors.mutedText,
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
    },
    form: {
        gap: spacing.fieldGap,
    },
    field: {
        gap: spacing.labelGap,
    },
    label: {
        color: colors.text,
        fontSize: 14,
        fontWeight: '600',
    },
    input: {
        backgroundColor: colors.surface,
        borderColor: colors.border,
        borderRadius: spacing.radius,
        borderWidth: 1,
        color: colors.text,
        fontSize: 16,
        minHeight: spacing.inputHeight,
        paddingHorizontal: spacing.inputPadding,
    },
    createAccountButton: {
        alignItems: 'center',
        backgroundColor: colors.accent,
        borderRadius: spacing.radius,
        justifyContent: 'center',
        minHeight: spacing.buttonHeight,
        paddingHorizontal: spacing.buttonPadding,
    },
    createAccountButtonText: {
        color: colors.buttonText,
        fontSize: 16,
        fontWeight: '600',
    },
    termsText: {
        color: colors.mutedText,
        fontSize: 13,
        lineHeight: 20,
        marginTop: spacing.formGap,
        textAlign: 'center',
    },
    loginLinkButton: {
        alignSelf: 'center',
        paddingVertical: spacing.linkPadding,
    },
    loginLinkText: {
        color: colors.accent,
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
    },
});
