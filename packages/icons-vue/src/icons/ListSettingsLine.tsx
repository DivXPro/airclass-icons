// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ListSettingsLineSvg from '@airclass/icons-svg/lib/asn/ListSettingsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ListSettingsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ListSettingsLineSvg}></AntdIcon>;
};

ListSettingsLine.displayName = 'ListSettingsLine';
ListSettingsLine.inheritAttrs = false;
export default ListSettingsLine;