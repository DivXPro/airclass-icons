// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TranslateSvg from '@airclass/icons-svg/lib/asn/Translate';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Translate = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TranslateSvg}></AntdIcon>;
};

Translate.displayName = 'Translate';
Translate.inheritAttrs = false;
export default Translate;