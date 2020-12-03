// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ItalicSvg from '@airclass/icons-svg/lib/asn/Italic';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Italic = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ItalicSvg}></AntdIcon>;
};

Italic.displayName = 'Italic';
Italic.inheritAttrs = false;
export default Italic;