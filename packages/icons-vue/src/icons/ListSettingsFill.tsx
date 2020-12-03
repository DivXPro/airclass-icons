// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ListSettingsFillSvg from '@airclass/icons-svg/lib/asn/ListSettingsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ListSettingsFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ListSettingsFillSvg}></AntdIcon>;
};

ListSettingsFill.displayName = 'ListSettingsFill';
ListSettingsFill.inheritAttrs = false;
export default ListSettingsFill;