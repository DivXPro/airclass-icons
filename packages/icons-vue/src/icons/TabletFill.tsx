// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TabletFillSvg from '@airclass/icons-svg/lib/asn/TabletFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TabletFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TabletFillSvg}></AntdIcon>;
};

TabletFill.displayName = 'TabletFill';
TabletFill.inheritAttrs = false;
export default TabletFill;