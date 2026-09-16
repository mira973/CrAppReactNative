import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors } from '../Components/Styles/colors';
import { spacing } from '../Components/Styles/spacing';
import { useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpFormData, signUpShema } from '../validation/signUpSchema';

export default function SignUpPage() {
    const router = useRouter();
    const { control, handleSubmit } = useForm<SignUpFormData>({
        resolver: zodResolver(signUpShema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const onSubmit = (data: SignUpFormData) => {
        console.log(data);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
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
                        <Controller
                            control={control}
                            name="username"
                            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                                <>
                                    <TextInput
                                        autoCapitalize="none"
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        placeholder="Enter your nickname"
                                        placeholderTextColor={colors.placeholder}
                                        style={styles.input}
                                        value={value}
                                    />
                                    {error && <Text style={styles.error}>{error.message}</Text>}
                                </>
                            )}
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Email</Text>
                        <Controller
                            control={control}
                            name="email"
                            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                                <>
                                    <TextInput
                                        autoCapitalize="none"
                                        keyboardType="email-address"
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        placeholder="Enter your email"
                                        placeholderTextColor={colors.placeholder}
                                        style={styles.input}
                                        value={value}
                                    />
                                    {error && <Text style={styles.error}>{error.message}</Text>}
                                </>
                            )}
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Password</Text>
                        <Controller
                            control={control}
                            name="password"
                            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                                <>
                                    <TextInput
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        placeholder="Enter your password"
                                        placeholderTextColor={colors.placeholder}
                                        secureTextEntry
                                        style={styles.input}
                                        value={value}
                                    />
                                    {error && <Text style={styles.error}>{error.message}</Text>}
                                </>
                            )}
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Confirm password</Text>
                        <Controller
                            control={control}
                            name="confirmPassword"
                            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                                <>
                                    <TextInput
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        placeholder="Repeat your password"
                                        placeholderTextColor={colors.placeholder}
                                        secureTextEntry
                                        style={styles.input}
                                        value={value}
                                    />
                                    {error && <Text style={styles.error}>{error.message}</Text>}
                                </>
                            )}
                        />
                    </View>

                    <TouchableOpacity activeOpacity={0.8} onPress={handleSubmit(onSubmit)} style={styles.createAccountButton}>
                        <Text style={styles.createAccountButtonText}>Create account</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.termsText}>
                    By creating an account, you agree to our Terms and Privacy Policy.
                </Text>

                <TouchableOpacity activeOpacity={0.7} style={styles.loginLinkButton} onPress={() => router.push('/LogInPage')}>
                    <Text style={styles.loginLinkText}>Already have an account? Log in</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: spacing.screen,
    },
    scrollContent: {
        flexGrow: 1,
        paddingVertical: spacing.section,
    },
    content: {
        alignSelf: 'center',
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
    error: {
        color: '#D14343',
        fontSize: 13,
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
