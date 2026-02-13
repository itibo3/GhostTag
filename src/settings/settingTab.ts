import { App, PluginSettingTab, Setting } from "obsidian";
import type GhostTagPlugin from "../../main";
import { getLocale } from "../i18n";

export class GhostTagSettingTab extends PluginSettingTab {
    plugin: GhostTagPlugin;

    constructor(app: App, plugin: GhostTagPlugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const { containerEl } = this;
        const t = getLocale();
        containerEl.empty();

        containerEl.createEl("h2", { text: t.settingsTitle });

        // ━━━ Delimiters ━━━
        containerEl.createEl("h3", { text: t.sectionDelimiter });

        new Setting(containerEl)
            .setName(t.startDelimiterName)
            .setDesc(t.startDelimiterDesc)
            .addText(text =>
                text
                    .setPlaceholder("%%")
                    .setValue(this.plugin.settings.startDelimiter)
                    .onChange(async (value) => {
                        if (value.trim().length === 0) return;
                        this.plugin.settings.startDelimiter = value;
                        await this.plugin.saveSettings();
                    })
            );

        new Setting(containerEl)
            .setName(t.endDelimiterName)
            .setDesc(t.endDelimiterDesc)
            .addText(text =>
                text
                    .setPlaceholder("%%")
                    .setValue(this.plugin.settings.endDelimiter)
                    .onChange(async (value) => {
                        if (value.trim().length === 0) return;
                        this.plugin.settings.endDelimiter = value;
                        await this.plugin.saveSettings();
                    })
            );

        // ━━━ Display ━━━
        containerEl.createEl("h3", { text: t.sectionDisplay });

        new Setting(containerEl)
            .setName(t.hoverOpacityName)
            .setDesc(t.hoverOpacityDesc)
            .addSlider(slider =>
                slider
                    .setLimits(10, 100, 5)
                    .setValue(this.plugin.settings.hoverOpacity * 100)
                    .setDynamicTooltip()
                    .onChange(async (value) => {
                        this.plugin.settings.hoverOpacity = value / 100;
                        await this.plugin.saveSettings();
                    })
            );

        new Setting(containerEl)
            .setName(t.editOpacityName)
            .setDesc(t.editOpacityDesc)
            .addSlider(slider =>
                slider
                    .setLimits(20, 100, 5)
                    .setValue(this.plugin.settings.editOpacity * 100)
                    .setDynamicTooltip()
                    .onChange(async (value) => {
                        this.plugin.settings.editOpacity = value / 100;
                        await this.plugin.saveSettings();
                    })
            );

        new Setting(containerEl)
            .setName(t.delimOpacityName)
            .setDesc(t.delimOpacityDesc)
            .addSlider(slider =>
                slider
                    .setLimits(10, 100, 5)
                    .setValue(this.plugin.settings.editDelimOpacity * 100)
                    .setDynamicTooltip()
                    .onChange(async (value) => {
                        this.plugin.settings.editDelimOpacity = value / 100;
                        await this.plugin.saveSettings();
                    })
            );

        new Setting(containerEl)
            .setName(t.animSpeedName)
            .setDesc(t.animSpeedDesc)
            .addSlider(slider =>
                slider
                    .setLimits(0, 1000, 50)
                    .setValue(this.plugin.settings.transitionDuration)
                    .setDynamicTooltip()
                    .onChange(async (value) => {
                        this.plugin.settings.transitionDuration = value;
                        await this.plugin.saveSettings();
                    })
            );

        // ━━━ Copy behavior ━━━
        containerEl.createEl("h3", { text: t.sectionCopy });

        new Setting(containerEl)
            .setName(t.autoStripName)
            .setDesc(t.autoStripDesc)
            .addToggle(toggle =>
                toggle
                    .setValue(this.plugin.settings.autoStripOnCopy)
                    .onChange(async (value) => {
                        this.plugin.settings.autoStripOnCopy = value;
                        await this.plugin.saveSettings();
                    })
            );
    }
}
