export const localization: { [id: string]: { [lang: string]: string } } = {
	title: {
		"en-US": "Obsidian Restore Tab Key Plugin",
		"zh-CN": "黑曜石笔记 恢復制表键行为插件",
		"zh-TW": "黑曜石筆記 恢復制表鍵行為插件",
	},
	description: {
		"en-US":
			"Restore tab key behavior: tab key inserts a tab, the way it should be.",
		"zh-CN": "回復 Tab 键行为，本该如此！",
		"zh-TW": "回復 Tab 鍵行為，本該如此！",
	},
	tabOrSpace: {
		"en-US": "Tab or Space Settings",
		"zh-CN": "Tab 或空格设定",
		"zh-TW": "Tab 或空格設定",
	},
	useSpacesInsteadOfTab: {
		"en-US": "Use spaces instead of tab",
		"zh-CN": "以空格取代 Tab",
		"zh-TW": "以空格取代 Tab",
	},
	useSpacesInsteadOfTabDesc: {
		"en-US":
			"false(default): Insert tab (\\t) when tab key is pressed. true: Insert spaces (    ) when tab key is pressed. (configurable)",
		"zh-CN":
			"关闭(默认)：在 Tab 键被按下时插入表格符号 (Tab)；开启：在 Tab 键被按下时插入空白符号（可以自订义）",
		"zh-TW":
			"關閉(預設)：在 Tab 鍵被按下時插入表格符號 (Tab)；開啟：在 Tab 鍵被按下時插入空白符號（可以自訂義）",
	},
	useHardSpaces: {
		"en-US": "Use hard spaces",
		"zh-CN": "使用硬空格字元",
		"zh-TW": "使用硬空格字元",
	},
	useHardSpacesDesc: {
		"en-US":
			'If "Indent using tabs" is false, space will be used to indent. If "Use hard spaces" is off, normal space characters will be used. Notice that with Markdown, repeated normal spaces will be rendered as one. Turn this option on to use hard spaces (U+00A0), which will not be truncated after Markdown render. To indent stuff in the processed Markdown output, move your cursor to the begin and press tab (indenting won\'t insert hard spaces)',
		"zh-CN":
			"假如「以 Tab 缩进」设定为关闭，空格会被用来缩排。如果「使用硬空格」被关闭，则会使用数个普通的空格符号。请注意：在 Markdown 下，重複的空格会被渲染为一个。开启此选项后，硬空格 (U+00A0) 将会取代空白字元当作 Tab，在渲染后不会被删减。若要使用硬空格进行缩排，请手动将光标移至行头并按下 Tab 键（缩排不会使用硬空格）",
		"zh-TW":
			"假如「以 Tab 縮排」設定為關閉，空格會被用來縮排。如果「使用硬空格」被關閉，則會使用數個普通的空格符號。請注意：在 Markdown 下，重複的空格會被渲染為一個。開啟此選項後，硬空格 (U+00A0) 將會取代空白字元當作 Tab，在渲染後不會被刪減。若要使用硬空格進行縮排，請手動將游標移至行頭並按下 Tab 鍵（縮排不會使用硬空格）",
	},
	spaceCount: {
		"en-US": "Space count",
		"zh-CN": "空格数量",
		"zh-TW": "空格數量",
	},
	spaceCountDesc: {
		"en-US":
			"The number of spaces or hard spaces inserted when tab key is pressed. default: 4",
		"zh-CN": "使用几个空格字符取代一个 Tab 字符？默认：4个",
		"zh-TW": "使用幾個空格符號取代一個 Tab 字元？預設：4個",
	},
	alignSpaces: {
		"en-US": "Align spaces (just like how tabs behave)",
		"zh-CN": "对齐空格",
		"zh-TW": "對齊空格",
	},
	alignSpacesDesc: {
		"en-US":
			'At space count of 4, pressing tab after "abc" inserts one space, "abcde" inserts 3, so the end position after pressing tab is always an integer multiple of the space count.',
		"zh-CN":
			'假设「空格数量」设为 4，则在"abc"最后按下 Tab 键会插入一个空白，"abcde"则为三个，使得按下 Tab 插入空格后的光标位置为空格数量的整数倍',
		"zh-TW":
			'假設「空格數量」設為 4，則在"abc"最後按下 Tab 鍵會插入一個空白，"abcde"則為三個，使得按下 Tab 插入空格後的游標位置為空格數量的整數倍',
	},
	tabKeyBehavior: {
		"en-US": "Tab Key Behavior",
		"zh-CN": "Tab 键行为",
		"zh-TW": "Tab 鍵行為",
	},
	indentWhenSelectionNotEmpty: {
		"en-US": "Indents when selection is not empty",
		"zh-CN": "在有文字被选取时進行缩排",
		"zh-TW": "在有文字被選取時進行縮排",
	},
	indentWhenSelectionNotEmptyDesc: {
		"en-US":
			"true(default): Select some text and press tab key will indent the selected lines. Same behavior as most IDEs. \nfalse: Selection will be replaced with one tab",
		"zh-CN":
			"开启（默认）：选取/反白一些文字后按下 Tab 键会缩进该几行文字。此行为和多数 IDE 相同；关闭：选取的文字会被取代为一个 Tab",
		"zh-TW":
			"開啟（預設）：選取/反白一些文字後按下 Tab 鍵會縮排該幾行文字。此行為和多數 IDE 相同；關閉：選取的文字會被取代為一個 Tab",
	},
	indentOnlySelectionMultipleLine: {
		"en-US": "Indents only when selection contains multiple lines",
		"zh-CN": "仅在选取多行时进行缩进",
		"zh-TW": "僅在選取多行時進行縮排",
	},
	indentOnlySelectionMultipleLineDesc: {
		"en-US":
			"true(default): If the selection lies within one line, a tab (or spaces) will replace the selection instead",
		"zh-CN":
			"开启（默认）：如果仅有一行文字被选取，则选取的文字会被取代为一个 Tab",
		"zh-TW":
			"開啟（預設）：如果僅有一行文字被選取，則選取的文字會被取代為一個 Tab",
	},
	allowException: {
		"en-US": "Allow exceptions for indenting",
		"zh-CN": "允许对缩进进行例外处理",
		"zh-TW": "對縮排進行例外處理",
	},
	onlyInCodeBlocks: {
		"en-US": "Only activate plugin in code blocks",
		"zh-CN": "仅在代码区块内激活此插件",
		"zh-TW": "僅在程式碼區塊內啟用此插件",
	},
	onlyInCodeBlocksDesc: {
		"en-US":
			"Will do nothing if the cursor is not in a code block and use default behavior (indent, or other plugins that uses the tab key, like Obsidian Tabout)",
		"zh-CN":
			"当光标不在代码区块内的话，使用默认 Tab 键行为（缩进，或者其他使用 Tab 键的插件，如 Obsidian Tabout）",
		"zh-TW":
			"當游標不在程式碼區塊內的話，使用預設 Tab 鍵行為（縮排，或者其他使用 Tab 鍵的插件，如 Obsidian Tabout）",
	},
	allowExceptionDesc: {
		"en-US":
			"Indent line even when the selection is empty when the line matches the regex (For example, when cursor is on an empty list bullet)",
		"zh-CN":
			"若光标所在的那行匹配以下表达式时，仍然进行缩进（如该行为空白的清单列表）",
		"zh-TW":
			"若游標所在的那行符合以下表達式時，仍然進行縮排（如該行為空白的清單列表）",
	},
	exceptionRegex: {
		"en-US": "Exception regex",
		"zh-CN": "例外的正则表达式",
		"zh-TW": "例外的正規表達式",
	},
	exceptionRegexDesc: {
		"en-US":
			"default: Indents regardless in empty list entries (zero or more whitespaces, followed by - or number. then optionally a checkbox and then a space). Remove the trailing $ to enable indentation in non-empty lists",
		"zh-CN":
			"默认：在该行为清单列表项目时（零个或以上个空白，加上一个数字，也许再加上一个複选框，然后再一个空白）。删除结尾的 $ 符号，可以让此表达式匹配非空白的清单项目。",
		"zh-TW":
			"預設：在該行為清單列表項目時（零個或以上個空白，加上一個數字，也許再加上一個複選框，然後再一個空白）。刪除結尾的 $ 符號，可以讓此表達式匹配非空白的清單項目。",
	},
	pluginCompatibility: {
		"en-US": "Compatibility",
		"zh-CN": "兼容性",
		"zh-TW": "兼容性",
	},
	obsidianTableEditor: {
		"en-US": "Use with the native Obsidian Table Editor",
		"zh-CN": "和黑曜石原生表格编辑器一起使用",
		"zh-TW": "和黑曜石原生表格編輯器一起使用",
	},
	obsidianTableEditorDesc: {
		"en-US":
			'Do not capture tab key if cursor is on an Obsidian table editor in "Live Preview" mode, so you can go to next cell with the tab key. This setting does not apply to "Source" mode. Also, it is recommended to uninstall/unbind tab in Advanced Tables plugin if you mainly work in live preview mode, because Advanced Tables currently doesn\'t work as well as the native editor does.',
		"zh-CN":
			"在预览模式下不对 Tab 键进行处理，交给黑曜石原生表格编辑器。若你常在预览模式下工作，我建议将 Advanced Tables plugin 高级表格插件停用或将其 Tab 键解绑，因为它没有比表格编辑器好用。",
		"zh-TW":
			"在預覽模式下不對 Tab 鍵進行處理，交給黑曜石原生表格編輯器。若你常在預覽模式下工作，我建議將 Advanced Tables plugin 進階表格插件停用或將其 Tab 鍵解綁，因為它沒有比表格編輯器好用。",
	},
	advancedTables: {
		"en-US": "Use with Advanced Tables plugin",
		"zh-CN": "和 Advanced Tables plugin 高级表格插件一起使用",
		"zh-TW": "和 Advanced Tables plugin 進階表格插件一起使用",
	},
	advancedTablesDesc: {
		"en-US":
			'Creates a new table or go to next cell when cursor is in a table. Requires disabling "Bind tab to table navigation" in the Advanced Tables plugin (and restart Obsidian). I recommend leaving that setting on and this off, and leave tab key binding to Advanced Tables plugin in a table environment, it does the exact same thing.',
		"zh-CN":
			"当光标在一个表格内时按下 Tab 会创建新表格或跳到下一个单元格。需要在高级表格插件中关闭「Bind tab to table navigation」并重启黑曜石笔记。建议维持原样，在表格环境内交给高级表格插件处理 Tab 键绑定。",
		"zh-TW":
			"當游標在一個表格內時按下 Tab 會創建新表格或跳到下一個儲存格。需要在進階表格插件中關閉「Bind tab to table navigation」並重啟黑曜石筆記。建議維持原樣，在表格環境內交給進階表格插件處理 Tab 鍵綁定。",
	},
	outliner: {
		"en-US": "Use with Obsidian Outliner plugin",
		"zh-CN": "和 Obsidian Outliner plugin 大纲插件一起使用",
		"zh-TW": "和 Obsidian Outliner plugin 大綱插件一起使用",
	},
	outlinerDesc: {
		"en-US":
			"Try execute Outliner indent operation when tab is pressed, if nothing changed, use default Restore Tab Key plugin behavior. Basically, if the selection is empty and cursor is on a list item, it will indent the item if Tab is pressed, unless it can't, in that case a tab will be inserted. A list item can't be indented if it is already one level deeper than the item above. This plugin can also indent everything under the selected item recursively, and relabel numbered lists.",
		"zh-CN":
			"尝试执行 Outliner 的缩排指令，如果没有任何更改则套用本插件的设定。基本上当按下 Tab 键，且没有文字被选取，且光标在清单列表上的话，会直接将该清单列表等级",
		"zh-TW":
			"嘗試執行 Outliner 的縮排指令，如果沒有任何變化的話則套用本插件的設定。基本上當按下 Tab 鍵，且沒有文字被選取，且游標在清單列表上的話，會直接將該清單列表等級",
	},
	additional: {
		"en-US": "Additional Options",
		"zh-CN": "其他选项",
		"zh-TW": "其他選項",
	},
	customHotkey: {
		"en-US": "Custom hotkey",
		"zh-CN": "自定义热键",
		"zh-TW": "自定義熱鍵",
	},
	customHotkeyDesc: {
		"en-US":
			'Tab doesn\'t work for you? Try "Ctrl-Alt-Space", or "Shift-F6"? (Reload required. Go to "Community plugins" and disable then enable this plugin will do)',
		"zh-CN":
			'不想用 Tab 键？试试 "Ctrl-Alt-Space" 或者 "Shift-F6"？（需要重新启动插件，到「第三方插件」关闭此插件后再开启即可）',
		"zh-TW":
			'不想用 Tab 鍵？試試 "Ctrl-Alt-Space" 或者 "Shift-F6"？（需要重新啟動插件，到「第三方插件」關閉此插件後再開啟即可）',
	},
	language: {
		"en-US": "Settings page interface language",
		"zh-CN": "设定页显示语言",
		"zh-TW": "設定頁顯示語言",
	},
	languageDesc: {
		"en-US": "Would Chinese be better?",
		"zh-CN": "英文会更适合吗？",
		"zh-TW": "英文會更適合嗎？",
	},
	developerMode: {
		"en-US": "Developer Mode",
		"zh-CN": "开发者模式",
		"zh-TW": "開發者模式",
	},
	developerModeDesc: {
		"en-US":
			"Enable debug on the Obsidian Developer Console, accessible by pressing Ctrl+Shift+I and selecting the Console tab, and show hidden, deprecated settings",
		"zh-CN":
			"开启侦错信息，并显示被隐藏、退役的设定们。终端可以透过按下 Ctrl+Shift+I 后选择 Console 分页",
		"zh-TW":
			"開啟偵錯訊息，並顯示被隱藏、退役的設定們。終端可以透過按下 Ctrl+Shift+I 後選擇 Console 分頁",
	},
};
