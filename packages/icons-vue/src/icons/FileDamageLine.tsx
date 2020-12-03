// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileDamageLineSvg from '@airclass/icons-svg/lib/asn/FileDamageLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileDamageLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileDamageLineSvg}></AntdIcon>;
};

FileDamageLine.displayName = 'FileDamageLine';
FileDamageLine.inheritAttrs = false;
export default FileDamageLine;