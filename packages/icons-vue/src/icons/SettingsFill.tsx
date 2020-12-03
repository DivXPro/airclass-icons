// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SettingsFillSvg from '@airclass/icons-svg/lib/asn/SettingsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SettingsFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SettingsFillSvg}></AntdIcon>;
};

SettingsFill.displayName = 'SettingsFill';
SettingsFill.inheritAttrs = false;
export default SettingsFill;