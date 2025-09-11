import { z } from 'zod/v4';
import { ProviderV2, LanguageModelV2 } from '@ai-sdk/provider';
import * as _ai_sdk_provider_utils from '@ai-sdk/provider-utils';
import { FetchFunction } from '@ai-sdk/provider-utils';

type AnthropicMessagesModelId = 'claude-opus-4-20250514' | 'claude-sonnet-4-20250514' | 'claude-3-7-sonnet-20250219' | 'claude-3-5-sonnet-latest' | 'claude-3-5-sonnet-20241022' | 'claude-3-5-sonnet-20240620' | 'claude-3-5-haiku-latest' | 'claude-3-5-haiku-20241022' | 'claude-3-opus-latest' | 'claude-3-opus-20240229' | 'claude-3-sonnet-20240229' | 'claude-3-haiku-20240307' | (string & {});
declare const anthropicProviderOptions: z.ZodObject<{
    sendReasoning: z.ZodOptional<z.ZodBoolean>;
    thinking: z.ZodOptional<z.ZodObject<{
        type: z.ZodUnion<readonly [z.ZodLiteral<"enabled">, z.ZodLiteral<"disabled">]>;
        budgetTokens: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    disableParallelToolUse: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
type AnthropicProviderOptions = z.infer<typeof anthropicProviderOptions>;

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
        citations?: {
            enabled: boolean;
        };
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

interface AnthropicProvider extends ProviderV2 {
    /**
  Creates a model for text generation.
  */
    (modelId: AnthropicMessagesModelId): LanguageModelV2;
    /**
  Creates a model for text generation.
  */
    languageModel(modelId: AnthropicMessagesModelId): LanguageModelV2;
    chat(modelId: AnthropicMessagesModelId): LanguageModelV2;
    messages(modelId: AnthropicMessagesModelId): LanguageModelV2;
    /**
  Anthropic-specific computer use tool.
     */
    tools: typeof anthropicTools;
}
interface AnthropicProviderSettings {
    /**
  Use a different URL prefix for API calls, e.g. to use proxy servers.
  The default prefix is `https://api.anthropic.com/v1`.
     */
    baseURL?: string;
    /**
  API key that is being send using the `x-api-key` header.
  It defaults to the `ANTHROPIC_API_KEY` environment variable.
     */
    apiKey?: string;
    /**
  Custom headers to include in the requests.
       */
    headers?: Record<string, string>;
    /**
  Custom fetch implementation. You can use it as a middleware to intercept requests,
  or to provide a custom fetch implementation for e.g. testing.
      */
    fetch?: FetchFunction;
    generateId?: () => string;
}
/**
Create an Anthropic provider instance.
 */
declare function createAnthropic(options?: AnthropicProviderSettings): AnthropicProvider;
/**
Default Anthropic provider instance.
 */
declare const anthropic: AnthropicProvider;

export { type AnthropicProvider, type AnthropicProviderOptions, type AnthropicProviderSettings, anthropic, createAnthropic };
