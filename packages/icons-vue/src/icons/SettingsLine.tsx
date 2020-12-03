// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SettingsLineSvg from '@airclass/icons-svg/lib/asn/SettingsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SettingsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SettingsLineSvg}></AntdIcon>;
};

SettingsLine.displayName = 'SettingsLine';
SettingsLine.inheritAttrs = false;
export default SettingsLine;