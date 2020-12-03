// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Lock2FillSvg from '@airclass/icons-svg/lib/asn/Lock2Fill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Lock2Fill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Lock2FillSvg}></AntdIcon>;
};

Lock2Fill.displayName = 'Lock2Fill';
Lock2Fill.inheritAttrs = false;
export default Lock2Fill;