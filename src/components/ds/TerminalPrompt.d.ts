import * as React from 'react';

export interface TerminalPromptProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Shell user. @default "esteban" */
  user?: string;
  /** Shell host. @default "portfolio" */
  host?: string;
  /** The command shown after the prompt. @default "whoami" */
  command?: string;
  /** Optional output line shown in signal-green below the command. */
  output?: string;
  /** Show the macOS-style traffic-light chrome. @default true */
  chrome?: boolean;
  /** Show the blinking cursor. @default true */
  cursor?: boolean;
}

/**
 * The signature heritage motif: a terminal window with prompt, command,
 * optional green output, and blinking cursor.
 *
 * @startingPoint section="Brand" subtitle="Terminal prompt motif" viewport="700x220"
 */
export function TerminalPrompt(props: TerminalPromptProps): JSX.Element;
export default TerminalPrompt;
