// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileDamageFillSvg from '@airclass/icons-svg/lib/asn/FileDamageFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileDamageFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileDamageFillSvg}></AntdIcon>;
};

FileDamageFill.displayName = 'FileDamageFill';
FileDamageFill.inheritAttrs = false;
export default FileDamageFill;