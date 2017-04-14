import React from 'react';
import Money from './cp_money_don';
import Time from './cp_time_don';
import Material from './cp_material_don';

const Sidebar = () => {
      return (
        <div className="col-md-4 campaignSideBar">
          <center>
            <h3>Escoge el tipo de donación</h3>
              <div class="row">
                <Money />
                <Time />
                <Material />
              </div>
          </center>
        </div>
      );
    }

export default Sidebar;
