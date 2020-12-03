// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ParenthesesLineSvg from '@airclass/icons-svg/lib/asn/ParenthesesLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ParenthesesLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ParenthesesLineSvg}></AntdIcon>;
};

ParenthesesLine.displayName = 'ParenthesesLine';
ParenthesesLine.inheritAttrs = false;
export default ParenthesesLine;