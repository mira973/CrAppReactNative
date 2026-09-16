import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors } from '../Components/Styles/colors';
import { spacing } from '../Components/Styles/spacing';
import { useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormData, loginSchema } from '../validation/loginSchema';


export default function LoginPage(){

    const router = useRouter();
    const { control, handleSubmit } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = (data: LoginFormData) => {
        console.log(data),
        router.replace('/home')
    };

    return(
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Welcome back</Text>
                        <Text style={styles.subtitle}>Sign in to continue to Crownlytics.</Text>
                    </View>

                    <View style={styles.form}>
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

                        <TouchableOpacity activeOpacity={0.7} style={styles.forgotButton}>
                            <Text style={styles.forgotText}>Forgot password?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.8} onPress={handleSubmit(onSubmit)} style={styles.loginButton}>
                            <Text style={styles.loginButtonText}>Log in</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity activeOpacity={0.7} style={styles.createAccountButton} onPress={() => router.push('/signup')}>
                        <Text style={styles.createAccountText}>New to Crownlytics? Create account</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        forgotButton: {
            alignSelf: 'flex-end',
        },
        forgotText: {
            color: colors.accent,
            fontSize: 14,
            fontWeight: '600',
        },
        loginButton: {
            alignItems: 'center',
            backgroundColor: colors.accent,
            borderRadius: spacing.radius,
            justifyContent: 'center',
            minHeight: spacing.buttonHeight,
            paddingHorizontal: spacing.buttonPadding,
        },
        loginButtonText: {
            color: colors.buttonText,
            fontSize: 16,
            fontWeight: '600',
        },
        createAccountButton: {
            alignSelf: 'center',
            marginTop: spacing.formGap,
            paddingVertical: spacing.linkPadding,
        },
        createAccountText: {
            color: colors.mutedText,
            fontSize: 14,
            textAlign: 'center',
        },
    });