import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '../Components/Styles/colors';
import { spacing } from '../Components/Styles/spacing';

export default function HomePage() {
    const router = useRouter();
    const [playerQuery, setPlayerQuery] = useState('');

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.eyebrow}>CROWNLYTICS</Text>
                        <Text style={styles.title}>Обзор</Text>
                    </View>

                    <TouchableOpacity activeOpacity={0.7} onPress={() => router.back()} style={styles.headerButton}>
                        <Text style={styles.headerButtonText}>Назад</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.searchSection}>
                    <Text style={styles.sectionTitle}>Найти игрока</Text>
                    <View style={styles.searchRow}>
                        <TextInput
                            autoCapitalize="none"
                            onChangeText={setPlayerQuery}
                            placeholder="игрока тег"
                            placeholderTextColor={colors.placeholder}
                            style={styles.searchInput}
                            value={playerQuery}
                        />
                        <TouchableOpacity activeOpacity={0.8} style={styles.searchButton}>
                            <Text style={styles.searchButtonText}>Поиск</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.cards}>
                    <View style={styles.card}>
                        <Text style={styles.cardLabel}>Рейтинг</Text>
                        <Text style={styles.cardTitle}>Топ игроков</Text>
                        <Text style={styles.cardDescription}>Следите за лидерами сезона и их результатами.</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.cardLabel}>Статистика</Text>
                        <Text style={styles.cardTitle}>Популярные колоды</Text>
                        <Text style={styles.cardDescription}>Самые используемые стратегии за текущий период.</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.cardLabel}>Новости</Text>
                        <Text style={styles.cardTitle}>Новости и баланс</Text>
                        <Text style={styles.cardDescription}>Обновления игры и краткая сводка вашего прогресса.</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.background,
    },
    container: {
        flex: 1,
        alignSelf: 'center',
        maxWidth: spacing.formMaxWidth,
        paddingHorizontal: spacing.screen,
        paddingVertical: spacing.section,
        width: '100%',
    },
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: spacing.section,
    },
    eyebrow: {
        color: colors.mutedText,
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 1.2,
        marginBottom: spacing.labelGap,
    },
    title: {
        color: colors.text,
        fontSize: 30,
        fontWeight: '700',
        lineHeight: 38,
    },
    headerButton: {
        backgroundColor: colors.surfaceMuted,
        borderColor: colors.border,
        borderRadius: spacing.radius,
        borderWidth: 1,
        paddingHorizontal: spacing.buttonPadding,
        paddingVertical: spacing.button,
    },
    headerButtonText: {
        color: colors.text,
        fontSize: 14,
        fontWeight: '600',
    },
    searchSection: {
        gap: spacing.contentGap,
        marginBottom: spacing.section,
    },
    sectionTitle: {
        color: colors.text,
        fontSize: 16,
        fontWeight: '600',
    },
    searchRow: {
        alignItems: 'stretch',
        flexDirection: 'row',
        gap: spacing.contentGap,
    },
    searchInput: {
        backgroundColor: colors.surface,
        borderColor: colors.border,
        borderRadius: spacing.radius,
        borderWidth: 1,
        color: colors.text,
        flex: 1,
        fontSize: 16,
        minHeight: spacing.inputHeight,
        paddingHorizontal: spacing.inputPadding,
    },
    searchButton: {
        alignItems: 'center',
        backgroundColor: colors.accent,
        borderRadius: spacing.radius,
        justifyContent: 'center',
        minHeight: spacing.inputHeight,
        paddingHorizontal: spacing.buttonPadding,
    },
    searchButtonText: {
        color: colors.buttonText,
        fontSize: 15,
        fontWeight: '600',
    },
    cards: {
        gap: spacing.cardGap,
    },
    card: {
        backgroundColor: colors.surface,
        borderColor: colors.border,
        borderRadius: spacing.radius,
        borderWidth: 1,
        gap: spacing.headerGap,
        padding: spacing.cardPadding,
    },
    cardLabel: {
        color: colors.accent,
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 0.8,
        textTransform: 'uppercase',
    },
    cardTitle: {
        color: colors.text,
        fontSize: 20,
        fontWeight: '700',
    },
    cardDescription: {
        color: colors.mutedText,
        fontSize: 14,
        lineHeight: 21,
    },
});
