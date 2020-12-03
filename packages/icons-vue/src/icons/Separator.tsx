// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SeparatorSvg from '@airclass/icons-svg/lib/asn/Separator';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Separator = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SeparatorSvg}></AntdIcon>;
};

Separator.displayName = 'Separator';
Separator.inheritAttrs = false;
export default Separator;