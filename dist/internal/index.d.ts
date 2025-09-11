import { LanguageModelV2, JSONSchema7, LanguageModelV2CallOptions, LanguageModelV2CallWarning } from '@ai-sdk/provider';
import * as _ai_sdk_provider_utils from '@ai-sdk/provider-utils';
import { Resolvable, FetchFunction } from '@ai-sdk/provider-utils';

type AnthropicMessagesModelId = 'claude-opus-4-20250514' | 'claude-sonnet-4-20250514' | 'claude-3-7-sonnet-20250219' | 'claude-3-5-sonnet-latest' | 'claude-3-5-sonnet-20241022' | 'claude-3-5-sonnet-20240620' | 'claude-3-5-haiku-latest' | 'claude-3-5-haiku-20241022' | 'claude-3-opus-latest' | 'claude-3-opus-20240229' | 'claude-3-sonnet-20240229' | 'claude-3-haiku-20240307' | (string & {});

type AnthropicMessagesConfig = {
    provider: string;
    baseURL: string;
    headers: Resolvable<Record<string, string | undefined>>;
    fetch?: FetchFunction;
    buildRequestUrl?: (baseURL: string, isStreaming: boolean) => string;
    transformRequestBody?: (args: Record<string, any>) => Record<string, any>;
    supportedUrls?: () => LanguageModelV2['supportedUrls'];
    generateId?: () => string;
};
declare class AnthropicMessagesLanguageModel implements LanguageModelV2 {
    readonly specificationVersion = "v2";
    readonly modelId: AnthropicMessagesModelId;
    private readonly config;
    private readonly generateId;
    constructor(modelId: AnthropicMessagesModelId, config: AnthropicMessagesConfig);
    supportsUrl(url: URL): boolean;
    get provider(): string;
    get supportedUrls(): Record<string, RegExp[]> | PromiseLike<Record<string, RegExp[]>>;
    private getArgs;
    private getHeaders;
    private buildRequestUrl;
    private transformRequestBody;
    private extractCitationDocuments;
    doGenerate(options: Parameters<LanguageModelV2['doGenerate']>[0]): Promise<Awaited<ReturnType<LanguageModelV2['doGenerate']>>>;
    doStream(options: Parameters<LanguageModelV2['doStream']>[0]): Promise<Awaited<ReturnType<LanguageModelV2['doStream']>>>;
}

declare const anthropicTools: {
    /**
     * The bash tool enables Claude to execute shell commands in a persistent bash session,
     * allowing system operations, script execution, and command-line automation.
     *
     * Image results are supported.
     *
     * Tool name must be `bash`.
     */
    bash_20241022: _ai_sdk_provider_utils.ProviderDefinedToolFactory<{
        command: string;
        restart?: boolean;
    }, {}>;
    /**
     * The bash tool enables Claude to execute shell commands in a persistent bash session,
     * allowing system operations, script execution, and command-line automation.
     *
     * Image results are supported.
     *
     * Tool name must be `bash`.
     */
    bash_20250124: _ai_sdk_provider_utils.ProviderDefinedToolFactory<{
        command: string;
        restart?: boolean;
    }, {}>;
    /**
     * Claude can analyze data, create visualizations, perform complex calculations,
     * run system commands, create and edit files, and process uploaded files directly within
     * the API conversation.
     *
     * The code execution tool allows Claude to run Bash commands and manipulate files,
     * including writing code, in a secure, sandboxed environment.
     *
     * Tool name must be `code_execution`.
     */
    codeExecution_20250522: (args?: Parameters<_ai_sdk_provider_utils.ProviderDefinedToolFactoryWithOutputSchema<{
        code: string;
    }, {
        type: "code_execution_result";
        stdout: string;
        stderr: string;
        return_code: number;
    }, {}>>[0]) => _ai_sdk_provider_utils.Tool<{
        code: string;
    }, {
        type: "code_execution_result";
        stdout: string;
        stderr: string;
        return_code: number;
    }>;
    /**
     * Claude can interact with computer environments through the computer use tool, which
     * provides screenshot capabilities and mouse/keyboard control for autonomous desktop interaction.
     *
     * Image results are supported.
     *
     * Tool name must be `computer`.
     *
     * @param displayWidthPx - The width of the display being controlled by the model in pixels.
     * @param displayHeightPx - The height of the display being controlled by the model in pixels.
     * @param displayNumber - The display number to control (only relevant for X11 environments). If specified, the tool will be provided a display number in the tool definition.
     */
    computer_20241022: _ai_sdk_provider_utils.ProviderDefinedToolFactory<{
        action: "key" | "type" | "mouse_move" | "left_click" | "left_click_drag" | "right_click" | "middle_click" | "double_click" | "screenshot" | "cursor_position";
        coordinate?: number[];
        text?: string;
    }, {
        displayWidthPx: number;
        displayHeightPx: number;
        displayNumber?: number;
    }>;
    /**
     * Claude can interact with computer environments through the computer use tool, which
     * provides screenshot capabilities and mouse/keyboard control for autonomous desktop interaction.
     *
     * Image results are supported.
     *
     * Tool name must be `computer`.
     *
     * @param displayWidthPx - The width of the display being controlled by the model in pixels.
     * @param displayHeightPx - The height of the display being controlled by the model in pixels.
     * @param displayNumber - The display number to control (only relevant for X11 environments). If specified, the tool will be provided a display number in the tool definition.
     */
    computer_20250124: _ai_sdk_provider_utils.ProviderDefinedToolFactory<{
        action: "key" | "hold_key" | "type" | "cursor_position" | "mouse_move" | "left_mouse_down" | "left_mouse_up" | "left_click" | "left_click_drag" | "right_click" | "middle_click" | "double_click" | "triple_click" | "scroll" | "wait" | "screenshot";
        coordinate?: [number, number];
        duration?: number;
        scroll_amount?: number;
        scroll_direction?: "up" | "down" | "left" | "right";
        start_coordinate?: [number, number];
        text?: string;
    }, {
        displayWidthPx: number;
        displayHeightPx: number;
        displayNumber?: number;
    }>;
    /**
     * Claude can use an Anthropic-defined text editor tool to view and modify text files,
     * helping you debug, fix, and improve your code or other text documents. This allows Claude
     * to directly interact with your files, providing hands-on assistance rather than just suggesting changes.
     *
     * Tool name must be `str_replace_editor`.
     */
    textEditor_20241022: _ai_sdk_provider_utils.ProviderDefinedToolFactory<{
        command: "view" | "create" | "str_replace" | "insert" | "undo_edit";
        path: string;
        file_text?: string;
        insert_line?: number;
        new_str?: string;
        old_str?: string;
        view_range?: number[];
    }, {}>;
    /**
     * Claude can use an Anthropic-defined text editor tool to view and modify text files,
     * helping you debug, fix, and improve your code or other text documents. This allows Claude
     * to directly interact with your files, providing hands-on assistance rather than just suggesting changes.
     *
     * Tool name must be `str_replace_editor`.
     */
    textEditor_20250124: _ai_sdk_provider_utils.ProviderDefinedToolFactory<{
        command: "view" | "create" | "str_replace" | "insert" | "undo_edit";
        path: string;
        file_text?: string;
        insert_line?: number;
        new_str?: string;
        old_str?: string;
        view_range?: number[];
    }, {}>;
    /**
     * Claude can use an Anthropic-defined text editor tool to view and modify text files,
     * helping you debug, fix, and improve your code or other text documents. This allows Claude
     * to directly interact with your files, providing hands-on assistance rather than just suggesting changes.
     *
     * Note: This version does not support the "undo_edit" command.
     *
     * Tool name must be `str_replace_based_edit_tool`.
     */
    textEditor_20250429: _ai_sdk_provider_utils.ProviderDefinedToolFactory<{
        command: "view" | "create" | "str_replace" | "insert";
        path: string;
        file_text?: string;
        insert_line?: number;
        new_str?: string;
        old_str?: string;
        view_range?: number[];
    }, {}>;
    /**
     * Creates a web search tool that gives Claude direct access to real-time web content.
     *
     * Tool name must be `web_search`.
     *
     * @param maxUses - Maximum number of web searches Claude can perform during the conversation.
     * @param allowedDomains - Optional list of domains that Claude is allowed to search.
     * @param blockedDomains - Optional list of domains that Claude should avoid when searching.
     * @param userLocation - Optional user location information to provide geographically relevant search results.
     */
    webSearch_20250305: (args?: Parameters<_ai_sdk_provider_utils.ProviderDefinedToolFactoryWithOutputSchema<{
        query: string;
    }, {
        url: string;
        title: string;
        pageAge: string | null;
        encryptedContent: string;
        type: string;
    }[], {
        maxUses?: number;
        allowedDomains?: string[];
        blockedDomains?: string[];
        userLocation?: {
            type: "approximate";
            city?: string;
            region?: string;
            country?: string;
            timezone?: string;
        };
    }>>[0]) => _ai_sdk_provider_utils.Tool<{
        query: string;
    }, {
        url: string;
        title: string;
        pageAge: string | null;
        encryptedContent: string;
        type: string;
    }[]>;
    /**
     * Creates a web fetch tool that allows Claude to fetch and analyze content from specific URLs.
     * This tool is designed to retrieve web pages and documents that are explicitly mentioned
     * in the conversation, enabling Claude to access and process web content directly.
     *
     * Tool name must be `web_fetch`.
     *
     * @param maxUses - Maximum number of web fetches Claude can perform during the conversation.
     * @param allowedDomains - Optional list of domains that Claude is allowed to fetch from.
     * @param blockedDomains - Optional list of domains that Claude should avoid when fetching.
     * @param citations - Whether to include citations in the fetched content.
     * @param maxContentTokens - Maximum number of tokens for the fetched content.
     */
    webFetch_20250910: (args?: Parameters<_ai_sdk_provider_utils.ProviderDefinedToolFactoryWithOutputSchema<{
        url: string;
    }, {
        url: string;
        documentType: string;
        contentSource: string;
        title?: string;
        content: string;
        citations?: Array<{
            text: string;
            location: string;
        }>;
    }, {
        maxUses?: number;
        allowedDomains?: string[];
        blockedDomains?: string[];
        citations?: boolean;
        maxContentTokens?: number;
    }>>[0]) => _ai_sdk_provider_utils.Tool<{
        url: string;
    }, {
        url: string;
        documentType: string;
        contentSource: string;
        title?: string;
        content: string;
        citations?: Array<{
            text: string;
            location: string;
        }>;
    }>;
};

type AnthropicCacheControl = {
    type: 'ephemeral';
};
type AnthropicTool = {
    name: string;
    description: string | undefined;
    input_schema: JSONSchema7;
    cache_control: AnthropicCacheControl | undefined;
} | {
    name: string;
    type: 'computer_20250124' | 'computer_20241022';
    display_width_px: number;
    display_height_px: number;
    display_number: number;
} | {
    name: string;
    type: 'text_editor_20250124' | 'text_editor_20241022' | 'text_editor_20250429';
} | {
    name: string;
    type: 'bash_20250124' | 'bash_20241022';
} | {
    type: 'web_search_20250305';
    name: string;
    max_uses?: number;
    allowed_domains?: string[];
    blocked_domains?: string[];
    user_location?: {
        type: 'approximate';
        city?: string;
        region?: string;
        country?: string;
        timezone?: string;
    };
} | {
    type: 'web_fetch_20250910';
    name: string;
    max_uses?: number;
    allowed_domains?: string[];
    blocked_domains?: string[];
    citations?: boolean;
    max_content_tokens?: number;
} | {
    type: 'code_execution_20250522';
    name: string;
};
type AnthropicToolChoice = {
    type: 'auto' | 'any';
    disable_parallel_tool_use?: boolean;
} | {
    type: 'tool';
    name: string;
    disable_parallel_tool_use?: boolean;
};

declare function prepareTools({ tools, toolChoice, disableParallelToolUse, }: {
    tools: LanguageModelV2CallOptions['tools'];
    toolChoice?: LanguageModelV2CallOptions['toolChoice'];
    disableParallelToolUse?: boolean;
}): {
    tools: Array<AnthropicTool> | undefined;
    toolChoice: AnthropicToolChoice | undefined;
    toolWarnings: LanguageModelV2CallWarning[];
    betas: Set<string>;
};

export { AnthropicMessagesLanguageModel, type AnthropicMessagesModelId, anthropicTools, prepareTools };
