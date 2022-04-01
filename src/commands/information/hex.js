const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("r")
    .setDescription("Starts a ready check for the boys"),
  async execute(interaction) {
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("ready-button")
        .setLabel("ready")
        .setStyle("Success")
    );

    await interaction.reply({
      content: "Need 4 more! Ready up fuckos!",
      components: [row],
    });
  },
};
