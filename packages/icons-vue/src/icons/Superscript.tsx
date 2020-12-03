// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SuperscriptSvg from '@airclass/icons-svg/lib/asn/Superscript';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Superscript = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SuperscriptSvg}></AntdIcon>;
};

Superscript.displayName = 'Superscript';
Superscript.inheritAttrs = false;
export default Superscript;