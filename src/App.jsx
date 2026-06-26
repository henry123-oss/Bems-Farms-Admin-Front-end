import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/auth/ProtectedRoute'
import Layout from './components/layout/Layout'

// Public
import Landing from './pages/landing/Landing'
import Login from './pages/auth/Login'

// Dashboard
import Dashboard from './pages/dashboard/Dashboard'

// POS
import POS from './pages/pos/POS'

// Products
import ProductsList    from './pages/products/ProductsList'
import AddProduct      from './pages/products/AddProduct'
import Categories      from './pages/products/Categories'
import SubCategories   from './pages/products/SubCategories'
import Units           from './pages/products/Units'
import Brands          from './pages/products/Brands'
import Variants        from './pages/products/Variants'
import Warranty        from './pages/products/Warranty'
import Reviews         from './pages/products/Reviews'
import Barcode         from './pages/products/Barcode'
import BulkImport      from './pages/products/BulkImport'
import BulkExport      from './pages/products/BulkExport'

// Inventory
import StockList       from './pages/inventory/StockList'
import StockIn         from './pages/inventory/StockIn'
import StockOut        from './pages/inventory/StockOut'
import StockAdjustment from './pages/inventory/StockAdjustment'
import StockTransfer   from './pages/inventory/StockTransfer'
import BatchManagement from './pages/inventory/BatchManagement'
import Warehouses      from './pages/inventory/Warehouses'
import StockAlerts     from './pages/inventory/StockAlerts'
import StockValuation  from './pages/inventory/StockValuation'
import LostItems       from './pages/inventory/LostItems'

// Orders
import OrdersList  from './pages/orders/OrdersList'
import OrderDetail from './pages/orders/OrderDetail'
import Invoices    from './pages/orders/Invoices'
import Refunds     from './pages/orders/Refunds'

// Purchase
import PurchaseList     from './pages/purchase/PurchaseList'
import AddPurchase      from './pages/purchase/AddPurchase'
import PurchaseReturns  from './pages/purchase/PurchaseReturns'
import PurchasePayments from './pages/purchase/PurchasePayments'

// Suppliers
import SuppliersList    from './pages/suppliers/SuppliersList'
import AddSupplier      from './pages/suppliers/AddSupplier'
import SupplierPayments from './pages/suppliers/SupplierPayments'
import SupplierBalance  from './pages/suppliers/SupplierBalance'

// Deliveries (Bems Farms)
import ActiveDeliveries  from './pages/deliveries/ActiveDeliveries'
import DeliveryZones     from './pages/deliveries/DeliveryZones'
import DriversManagement from './pages/deliveries/DriversManagement'

// Customers
import CustomersList  from './pages/customers/CustomersList'
import CustomerDetail from './pages/customers/CustomerDetail'
import AddCustomer    from './pages/customers/AddCustomer'
import LoyaltyPoints  from './pages/customers/LoyaltyPoints'
import ActivityLog    from './pages/customers/ActivityLog'
import WalletBalance  from './pages/customers/WalletBalance'

// Staff
import StaffList        from './pages/staff/StaffList'
import AddStaff         from './pages/staff/AddStaff'
import RolesPermissions from './pages/staff/RolesPermissions'
import Attendance       from './pages/staff/Attendance'
import Schedule         from './pages/staff/Schedule'
import Holidays         from './pages/staff/Holidays'
import Payroll          from './pages/staff/Payroll'

// Accounts
import BankAccounts  from './pages/accounts/BankAccounts'
import Income        from './pages/accounts/Income'
import Expenses      from './pages/accounts/Expenses'
import MoneyTransfer from './pages/accounts/MoneyTransfer'

// Chef Bems AI (Bems Farms)
import Conversations    from './pages/chef-bems/Conversations'
import DietaryRules     from './pages/chef-bems/DietaryRules'
import MealAssociations from './pages/chef-bems/MealAssociations'

// Multi-store
import StoreList from './pages/multistore/StoreList'
import AddStore  from './pages/multistore/AddStore'

// Reports
import SalesReport     from './pages/reports/SalesReport'
import InventoryReport from './pages/reports/InventoryReport'
import CustomerReport  from './pages/reports/CustomerReport'
import PurchaseReport  from './pages/reports/PurchaseReport'
import SupplierReport  from './pages/reports/SupplierReport'
import ExpenseReport   from './pages/reports/ExpenseReport'
import FinanceReport   from './pages/reports/FinanceReport'

// Settings
import GeneralSettings      from './pages/settings/GeneralSettings'
import NotificationSettings from './pages/settings/NotificationSettings'
import PaymentSettings      from './pages/settings/PaymentSettings'
import CouponSettings       from './pages/settings/CouponSettings'
import POSSettings          from './pages/settings/POSSettings'
import TaxSettings          from './pages/settings/TaxSettings'
import CurrencySettings     from './pages/settings/CurrencySettings'
import InvoiceSettings      from './pages/settings/InvoiceSettings'
import ManagerSettings      from './pages/settings/ManagerSettings'

// Apps
import Calendar from './pages/apps/Calendar'
import Chat     from './pages/apps/Chat'
import Email    from './pages/apps/Email'

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        {/* Protected admin shell */}
        <Route element={<ProtectedRoute />}>

          {/* POS — full-screen, no sidebar */}
          <Route path="/pos" element={<POS />} />

          <Route element={<Layout />}>

            <Route path="/dashboard" element={<Dashboard />} />

            {/* Products */}
            <Route path="/products"                element={<ProductsList />} />
            <Route path="/products/add"            element={<AddProduct />} />
            <Route path="/products/categories"     element={<Categories />} />
            <Route path="/products/sub-categories" element={<SubCategories />} />
            <Route path="/products/units"          element={<Units />} />
            <Route path="/products/brands"         element={<Brands />} />
            <Route path="/products/variants"       element={<Variants />} />
            <Route path="/products/warranty"       element={<Warranty />} />
            <Route path="/products/reviews"        element={<Reviews />} />
            <Route path="/products/barcode"        element={<Barcode />} />
            <Route path="/products/import"         element={<BulkImport />} />
            <Route path="/products/export"         element={<BulkExport />} />

            {/* Inventory */}
            <Route path="/inventory/stock"      element={<StockList />} />
            <Route path="/inventory/stock-in"   element={<StockIn />} />
            <Route path="/inventory/stock-out"  element={<StockOut />} />
            <Route path="/inventory/adjustment" element={<StockAdjustment />} />
            <Route path="/inventory/transfer"   element={<StockTransfer />} />
            <Route path="/inventory/batches"    element={<BatchManagement />} />
            <Route path="/inventory/warehouses" element={<Warehouses />} />
            <Route path="/inventory/alerts"     element={<StockAlerts />} />
            <Route path="/inventory/valuation"  element={<StockValuation />} />
            <Route path="/inventory/lost-items" element={<LostItems />} />

            {/* Orders */}
            <Route path="/orders"          element={<OrdersList />} />
            <Route path="/orders/invoices" element={<Invoices />} />
            <Route path="/orders/refunds"  element={<Refunds />} />
            <Route path="/orders/:id"      element={<OrderDetail />} />

            {/* Purchase */}
            <Route path="/purchase"          element={<PurchaseList />} />
            <Route path="/purchase/add"      element={<AddPurchase />} />
            <Route path="/purchase/returns"  element={<PurchaseReturns />} />
            <Route path="/purchase/payments" element={<PurchasePayments />} />

            {/* Suppliers */}
            <Route path="/suppliers"          element={<SuppliersList />} />
            <Route path="/suppliers/add"      element={<AddSupplier />} />
            <Route path="/suppliers/payments" element={<SupplierPayments />} />
            <Route path="/suppliers/balance"  element={<SupplierBalance />} />

            {/* Deliveries */}
            <Route path="/deliveries/active"  element={<ActiveDeliveries />} />
            <Route path="/deliveries/zones"   element={<DeliveryZones />} />
            <Route path="/deliveries/drivers" element={<DriversManagement />} />

            {/* Customers */}
            <Route path="/customers"          element={<CustomersList />} />
            <Route path="/customers/add"      element={<AddCustomer />} />
            <Route path="/customers/loyalty"  element={<LoyaltyPoints />} />
            <Route path="/customers/activity" element={<ActivityLog />} />
            <Route path="/customers/wallet"   element={<WalletBalance />} />
            <Route path="/customers/:id"      element={<CustomerDetail />} />

            {/* Staff */}
            <Route path="/staff"            element={<StaffList />} />
            <Route path="/staff/add"        element={<AddStaff />} />
            <Route path="/staff/roles"      element={<RolesPermissions />} />
            <Route path="/staff/attendance" element={<Attendance />} />
            <Route path="/staff/schedule"   element={<Schedule />} />
            <Route path="/staff/holidays"   element={<Holidays />} />
            <Route path="/staff/payroll"    element={<Payroll />} />

            {/* Accounts */}
            <Route path="/accounts/bank"     element={<BankAccounts />} />
            <Route path="/accounts/income"   element={<Income />} />
            <Route path="/accounts/expenses" element={<Expenses />} />
            <Route path="/accounts/transfer" element={<MoneyTransfer />} />

            {/* Chef Bems AI */}
            <Route path="/chef-bems/conversations"     element={<Conversations />} />
            <Route path="/chef-bems/dietary-rules"     element={<DietaryRules />} />
            <Route path="/chef-bems/meal-associations" element={<MealAssociations />} />

            {/* Multi-store */}
            <Route path="/stores"     element={<StoreList />} />
            <Route path="/stores/add" element={<AddStore />} />

            {/* Reports */}
            <Route path="/reports/sales"      element={<SalesReport />} />
            <Route path="/reports/inventory"  element={<InventoryReport />} />
            <Route path="/reports/customers"  element={<CustomerReport />} />
            <Route path="/reports/purchases"  element={<PurchaseReport />} />
            <Route path="/reports/suppliers"  element={<SupplierReport />} />
            <Route path="/reports/expenses"   element={<ExpenseReport />} />
            <Route path="/reports/finance"    element={<FinanceReport />} />

            {/* Settings */}
            <Route path="/settings/general"       element={<GeneralSettings />} />
            <Route path="/settings/notifications" element={<NotificationSettings />} />
            <Route path="/settings/payment"       element={<PaymentSettings />} />
            <Route path="/settings/coupons"       element={<CouponSettings />} />
            <Route path="/settings/pos"           element={<POSSettings />} />
            <Route path="/settings/tax"           element={<TaxSettings />} />
            <Route path="/settings/currencies"    element={<CurrencySettings />} />
            <Route path="/settings/invoices"      element={<InvoiceSettings />} />
            <Route path="/settings/manager"       element={<ManagerSettings />} />

            {/* Apps */}
            <Route path="/apps/calendar" element={<Calendar />} />
            <Route path="/apps/chat"     element={<Chat />} />
            <Route path="/apps/email"    element={<Email />} />

          </Route>
        </Route>

        {/* 404 fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
